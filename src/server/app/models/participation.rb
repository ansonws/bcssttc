class Participation < ApplicationRecord
  belongs_to :player
  belongs_to :match

  validates :match_id, uniqueness: { scope: :player_id }
end
