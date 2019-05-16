tournament = Tournament.create(
    edition: 49,
    date: Time.now.strftime("%b %-d, %Y")
)

['Boys', 'Girls'].each do |gender|
    Event.create(
        gender: gender,
        category: 'Singles',
        tournament_id: tournament.id
    )

    Event.create(
        gender: gender,
        category: 'Team',
        tournament_id: tournament.id
    )
end

30.times do
    school = School.create(
        name: Faker::University.name,
        city: Faker::Nation.capital_city
    )

    Sponsor.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        position: ['Coach', 'Teacher', 'Parent'].sample,
        email: Faker::Internet.email,
        phone_number: rand(000_000_0000..999_999_9999),
        school_id: school.id
    )

    rand(1..4).times do
        gender = ['Boys', 'Girls'].sample
        team = Team.create(
            gender: gender,
            tier: ['A', 'B'].sample,
            school_id: school.id,
            event_id: Event.find_by(gender: gender, category: 'Team').id
        )
        
        rand(3..5).times do
            Player.create(
                first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                gender: gender,
                grade: rand(8..12),
                rating: rand(100..4000),
                school_id: school.id,
                team_id: team.id
            )
        end
    end
end

Event.where(tournament_id: tournament.id, category: 'Singles').each do |event|
    Player.where(gender: event.gender).each do |player|
        if rand(1..10) > 1
            Entry.create(
                player_id: player.id,
                event_id: event.id
            )
        end
    end
end

puts "Generated #{ School.all.count } schools"
puts "Generated #{ Team.all.count } teams"
puts "Generated #{ Player.all.count } players"
puts "Generated #{ Tournament.all.count } tournament"
puts "Generated #{ Event.all.count } events"
puts "Generated #{ Sponsor.all.count } sponsors"
puts "Generated #{ Entry.all.count } entries"
