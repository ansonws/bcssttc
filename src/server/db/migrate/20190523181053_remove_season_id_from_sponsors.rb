class RemoveSeasonIdFromSponsors < ActiveRecord::Migration[5.2]
  def change
    remove_reference :sponsors, :season, index: true, foreign_key: true
  end
end
