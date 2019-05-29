class Team < ApplicationRecord
  belongs_to :season

  has_one :entry, as: :competitor, dependent: :destroy

  has_many :tenures, dependent: :destroy

  validates :gender, presence: true
end
