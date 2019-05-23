class Season < ApplicationRecord
  has_many :teams, dependent: :nullify
  has_many :tenures, dependent: :nullify

  belongs_to :school
  belongs_to :sponsor
  belongs_to :tournament
end
