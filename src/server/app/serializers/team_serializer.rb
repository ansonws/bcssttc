class TeamSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :gender,
    :tier
  )
end
