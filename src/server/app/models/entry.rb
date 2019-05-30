class Entry < ApplicationRecord
  belongs_to :competitor, polymorphic: true

  belongs_to :event

  validates :event_id, uniqueness: { scope: [:competitor_id, :competitor_type] }
end
