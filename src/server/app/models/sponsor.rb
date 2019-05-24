class Sponsor < ApplicationRecord
  has_many :seasons

  validates(
    :first_name, 
    :last_name, 
    :position, 
    presence: true
  ) 

  validates(
    :email, 
    presence: true, 
    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  )
end
