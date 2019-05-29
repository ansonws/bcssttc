class Tournament < ApplicationRecord
  has_many :seasons
  has_many :events

  validates :edition, :year, presence: true

  extend FriendlyId
  friendly_id :year, use: :slugged
end
