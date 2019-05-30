class EntrySerializer < ActiveModel::Serializer
  attributes(
    :id,
    :competitor_id,
    :competitor_type
  )

  belongs_to :event, serializer: EventSerializer
end
