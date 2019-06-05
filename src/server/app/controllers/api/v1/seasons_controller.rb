class Api::V1::SeasonsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_tournament, only: :index

  def index 
    seasons = Season.where(tournament_id: @tournament.id)
    season = Season.last

    render(
      json: seasons,
      each_serializer: SeasonCollectionSerializer
    ) 
  end

  def create
    sponsor = Sponsor.create(
      first_name: params[:sponsorFirstName],
      last_name: params[:sponsorLastName],
      position: params[:position],
      email: params[:email],
      phone_number: params[:phoneNumber]
    )

    school = School.find_by(name: params[:schoolName])
    if school.nil?
      school = School.create(
        name: params[:schoolName], 
        city: params[:city],
      )
    end
    
    season = Season.create(
      tournament_id: Tournament.find_by(edition: 49).id,
      school_id: school.id,
      sponsor_id: sponsor.id
    )

    params[:teams].each do | team_name, team_values |
      if team_values[:players].length > 0 
        team = Team.create(
          gender: team_values[:gender],
          tier: team_values[:tier],
          season_id: season.id
        )

        team_values[:players].each do |player_values|
          player = Player.find_by(
            first_name: player_values[:first_name],
            last_name: player_values[:last_name],
            gender: player_values[:gender]
          )
          if player.nil?
            player = Player.create(
              first_name: player_values[:first_name],
              last_name: player_values[:last_name],
              gender: team_values[:gender]
            )
          end 

          tenure = Tenure.create(
            grade: player_values[:grade],
            rating: player_values[:rating],
            player_id: player.id,
            season_id: season.id,
            team_id: team.id
          )
        end 

        entry = Entry.create(
            event_id: Event.find_by(
            gender: team_values[:gender],
            category: 'Team',
            tournament_id: Tournament.find_by(edition: 49).id
          ).id,
          competitor_id: team.id,
          competitor_type: 'Team'
        )

        team[:entry_id] = entry.id
      end
    end

    params[:singles].each do | player_values |
      player = Player.find_by(
        first_name: player_values[:first_name],
        last_name: player_values[:last_name],
        gender: player_values[:gender]
      )
      if player.nil?
        player = Player.create(
          first_name: player_values[:first_name],
          last_name: player_values[:last_name],
          gender: player_values[:gender]
        )
      end
      
      tenure = Tenure.find_by(
        player_id: player.id,
        season_id: season.id
      )
      if tenure.nil?
        tenure = Tenure.create(
          grade: player_values[:grade],
          rating: player_values[:rating],
          player_id: player.id,
          season_id: season.id
        )
      end
      
      Entry.create(
        event_id: Event.find_by(
          gender: player_values[:gender],
          category: 'Singles',
          tournament_id: Tournament.find_by(edition: 49).id
        ).id,
        competitor_id: tenure.id,
        competitor_type: 'Tenure'
      )
    end

    render json: { status: 200 }
  end

  private 

  def find_tournament
    @tournament ||= Tournament.friendly.find params[:tournament_id]
  end
end
