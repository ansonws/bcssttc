class School < ApplicationRecord
    validates :name, presence: true
    validates :city, presence: true

    has_many :players, dependent: :nullify
    has_many :teams, dependent: :nullify
    has_many :sponsors, dependent: :nullify
end
