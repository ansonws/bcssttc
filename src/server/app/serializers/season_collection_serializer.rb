class SeasonCollectionSerializer < ActiveModel::Serializer
  attributes :id #, :girls_singles
  
  belongs_to :school
  belongs_to :sponsor
  belongs_to :tournament

  has_many :teams
  has_many :tenures
  has_many :team_entries
  has_many :singles_entries
  has_many :girls_singles
end
