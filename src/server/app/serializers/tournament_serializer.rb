class TournamentSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :edition,
    :year
  )
end
