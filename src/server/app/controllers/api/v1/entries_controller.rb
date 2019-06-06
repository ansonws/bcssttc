class Api::V1::EntriesController < ApplicationController
  def boys_singles
    entries = Entry.where(event_id: 5)
    competitors = [];

    entries.each do |entry|
      competitors.push(entry.competitor)
    end    

    competitors.sort_by! { |tenure| 20_000 - tenure.rating }
    render json: competitors
  end
end
