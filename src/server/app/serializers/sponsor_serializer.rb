class SponsorSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :first_name,
    :last_name,
    :position,
    :email,
    :phone_number
  )
end
