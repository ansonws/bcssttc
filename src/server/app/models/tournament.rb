class Tournament < ApplicationRecord
  has_many :seasons
  has_many :events

  validates :edition, :date, presence: true
end
