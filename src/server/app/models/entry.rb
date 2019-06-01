class Entry < ApplicationRecord
  belongs_to :competitor, polymorphic: true

  belongs_to :event
  # accepts_nested_attributes_for :event, allow_destroy: true

  # has_one :team

  # validates :event_id, uniqueness: { scope: [:competitor_id, :competitor_type] }
end
