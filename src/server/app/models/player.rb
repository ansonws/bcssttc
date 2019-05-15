class Player < ApplicationRecord
  has_many :participations, dependent: :destroy
  has_many :matches_played, through: :participations, source: :match

  has_many :entries, dependent: :destroy
  has_many :events_joined, through: :entries, source: :event
  belongs_to :school
  belongs_to :team
end
