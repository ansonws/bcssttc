class Event < ApplicationRecord
  belongs_to :tournament

  has_many :entries, dependent: :destroy
  has_many :entered_competitors, through: :entries, source: :competitor

  validates :gender, :category, presence: true

  # accepts_nested_attributes_for :entries, allow_destroy: true

end
