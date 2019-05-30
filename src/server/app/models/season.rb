class Season < ApplicationRecord
  has_many :teams, dependent: :nullify
  has_many :tenures, dependent: :nullify

  has_many :team_entries, through: :teams, source: :entry
  has_many :singles_entries, through: :tenures, source: :entries

  belongs_to :school
  belongs_to :sponsor
  belongs_to :tournament

  # validates :school_id, uniqueness: { scope: :tournament_id }

  def girls_singles
    self.singles_entries #.where(event[:gender] = )
    # each_serializer: EntrySerializer
  end
end
