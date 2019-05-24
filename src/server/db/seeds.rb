tournament48 = Tournament.create(
  edition: 48,
  date: Time.now.strftime("%b %-d, %Y")
)

tournament49 = Tournament.create(
  edition: 49,
  date: Time.now.strftime("%b %-d, %Y")
)

['Boys', 'Girls'].each do |gender|
  Event.create(
    gender: gender,
    category: 'Singles',
    tournament_id: tournament48.id
  )

  Event.create(
    gender: gender,
    category: 'Team',
    tournament_id: tournament48.id
  )
end

['Boys', 'Girls'].each do |gender|
  Event.create(
    gender: gender,
    category: 'Singles',
    tournament_id: tournament49.id
  )

Event.create(
    gender: gender,
    category: 'Team',
    tournament_id: tournament49.id
  )
end

200.times do
  Player.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: ['Boys', 'Girls'].sample
  )
end

80.times do
  school = School.create(
    name: Faker::University.name,
    city: Faker::Nation.capital_city
  )

  sponsor48 = Sponsor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    position: ['Coach', 'Teacher', 'Parent'].sample,
    email: Faker::Internet.email,
    phone_number: rand(000_000_0000..999_999_9999)
  )

  season48 = Season.create(
    tournament_id: tournament48.id,
    school_id: school.id,
    sponsor_id: sponsor48.id
  )

  sponsor49 = Sponsor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    position: ['Coach', 'Teacher', 'Parent'].sample,
    email: Faker::Internet.email,
    phone_number: rand(000_000_0000..999_999_9999),
  )
    
  season49 = Season.create(
    tournament_id: tournament48.id,
    school_id: school.id,
    sponsor_id: sponsor49.id
  )
  
  rand(1..4).times do
    gender = ['Boys', 'Girls'].sample
    team = Team.create(
        gender: gender,
        tier: ['A', 'B'].sample,
        season_id: season49.id
      )
    
    entry = Entry.create(
      event_id: Event.find_by(gender: gender, category: 'Team').id, 
      competitor_id: team.id,
      competitor_type: 'Team'
    )
    
    team.entry_id = entry.id 

    rand(3..5).times do
      t = Tenure.create(
        grade: rand(8..12),
        rating: rand(100..4000),
        player_id: Player.where(gender: gender).sample.id,
        season_id: season49.id,
        team_id: team.id
      )
    end
  end
end

Event.where(tournament_id: tournament48.id, category: 'Singles').each do |event|
  Tenure.joins(:player).where("players.gender = ?", event.gender).each do |tenure|
    if rand(1..10) > 1
        e = Entry.create(
            competitor_id: tenure.id,
            event_id: event.id,
            competitor_type: 'Tenure'
        )
    end
  end
end

Event.where(tournament_id: tournament49.id, category: 'Singles').each do |event|
  Tenure.joins(:player).where("players.gender = ?", event.gender).each do |tenure|
    if rand(1..10) > 1
        Entry.create(
            competitor_id: tenure.id,
            event_id: event.id,
            competitor_type: 'Tenure'
        )
    end
  end
end

puts "Generated #{ Tournament.all.count } tournaments"
puts "Generated #{ Event.all.count } events"
puts "Generated #{ Season.all.count } seasons"
puts "Generated #{ School.all.count } schools"
puts "Generated #{ Team.all.count } teams"
puts "Generated #{ Player.all.count } players"
puts "Generated #{ Tenure.all.count } tenures"
puts "Generated #{ Sponsor.all.count } sponsors"
puts "Generated #{ Entry.all.count } entries"
