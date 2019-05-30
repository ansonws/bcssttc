class SchoolSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :name,
    :city
  )
end
