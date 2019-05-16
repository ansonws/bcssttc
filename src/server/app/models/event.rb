class Event < ApplicationRecord
  belongs_to :tournament

  has_many :matches, dependent: :nullify
  has_many :teams, dependent: :nullify

  has_many :entries, dependent: :destroy
  has_many :entered_players, through: :entries, source: :player
end
