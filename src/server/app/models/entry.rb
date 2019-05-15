class Entry < ApplicationRecord
  belongs_to :player
  belongs_to :event

  validates :event_id, uniqueness: { scope: :player_id }
end
