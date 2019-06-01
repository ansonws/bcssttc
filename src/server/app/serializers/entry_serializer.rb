class EntrySerializer < ActiveModel::Serializer
  attributes(
    :id,
    :event,
    :competitor_id,
    :competitor_type
  )

  def event 
    EventSerializer.new object.event 
  end

  # belongs_to :event, serializer: EventSerializer    
end
