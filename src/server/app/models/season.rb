class Season < ApplicationRecord
  has_many :teams, dependent: :nullify
  has_many :tenures, dependent: :nullify

  has_many :team_entries, through: :teams, source: :entry
  has_many :singles_entries, through: :tenures, source: :entries

  belongs_to :school
  belongs_to :sponsor
  belongs_to :tournament
  
  def boys_singles
    self.singles_entries.filter do |entry|
      entry.event[:gender] == 'Boys'
    end
  end

  def girls_singles
    self.singles_entries.filter do |entry|
      entry.event[:gender] == 'Girls'
    end
  end

  # validates :school_id, uniqueness: { scope: :tournament_id }

end
