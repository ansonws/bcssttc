class Api::V1::TournamentsController < ApplicationController
before_action :find_tournament, only: [:show, :entries]

  def index  
    tournaments = Tournament.order(edition: :desc)
    
    render(
      json: tournaments
    )
  end

  def show
    render(
      json: @tournament
    )
  end

  private

  def find_tournament
    @tournament ||= Tournament.friendly.find params[:id]
  end

end
