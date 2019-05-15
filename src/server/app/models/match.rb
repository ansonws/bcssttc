class Match < ApplicationRecord
  has_many :participations, dependent: :destroy
  has_many :participators, through: :participations, source: :player

  belongs_to :event
end
