class Tournament < ApplicationRecord
    has_many :events, dependent: :destroy
end
