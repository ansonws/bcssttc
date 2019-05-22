class AddSeasonReferencesToSponsors < ActiveRecord::Migration[5.2]
  def change
    add_reference :sponsors, :season, foreign_key: true
  end
end
