class Tenure < ApplicationRecord
  belongs_to :player
  belongs_to :season
  has_one :team

  has_many :entries, as: :competitor, dependent: :destroy

  validates :grade, presence: true
end
