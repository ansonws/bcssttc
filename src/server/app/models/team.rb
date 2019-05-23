class Team < ApplicationRecord
  belongs_to :season
  belongs_to :entries, as: :competitor

  has_many :tenures, dependent: :destroy

  validates :gender, presence: true
end
