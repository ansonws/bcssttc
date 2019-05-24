class Entry < ApplicationRecord
  belongs_to :competitor, polymorphic: true
  
  belongs_to :event
  
  has_one :team

  validates :event_id, uniqueness: { scope: :competitor_id }
end
