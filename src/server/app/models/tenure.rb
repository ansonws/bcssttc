class Tenure < ApplicationRecord
  belongs_to :player
  belongs_to :season
  belongs_to :team

  has_many :entries, as: :competitor, dependent: :destroy

  validates :grade, presence: true
end
