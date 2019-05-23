class School < ApplicationRecord
  has_many :seasons

  validates :name, :city, presence: true
end
