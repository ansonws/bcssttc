class Team < ApplicationRecord
  belongs_to :season
  # belongs_to :entry
  has_one :entry, as: :competitor, dependent: :destroy
  

  has_many :tenures, dependent: :destroy

  validates :gender, presence: true
end
