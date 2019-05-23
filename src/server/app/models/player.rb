class Player < ApplicationRecord
  has_many :tenures, dependent: :nullify

  validates :first_name, :last_name, :gender, presence: true
end
