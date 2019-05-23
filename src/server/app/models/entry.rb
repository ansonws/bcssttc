class Entry < ApplicationRecord
  belongs_to :event
  belongs_to :competitor, polymorphic: true

  validates :event_id, uniqueness: { scope: :competitor_id }
end
