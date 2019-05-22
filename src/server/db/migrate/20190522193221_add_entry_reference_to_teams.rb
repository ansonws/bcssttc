class AddEntryReferenceToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :entry, foreign_key: true
  end
end
