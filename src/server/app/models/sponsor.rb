class Sponsor < ApplicationRecord
  belongs_to :school
  validates :first_name, presence: true
  validates :last_name, presence: true

  validates(
    :email, 
    presence: true, 
    uniqueness: true, 
    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  )

end
