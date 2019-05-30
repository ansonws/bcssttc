class TenureSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :grade,
    :rating
  )

  belongs_to :player
end
