class SeasonCollectionSerializer < ActiveModel::Serializer
  attributes :id
  
  belongs_to :school
  belongs_to :sponsor
  belongs_to :tournament

  has_many :teams
  has_many :tenures
  has_many :team_entries
  has_many :girls_singles
  has_many :boys_singles
end
