class Team < ApplicationRecord
  belongs_to :school
  belongs_to :event

  validates :gender, presence: true
end
