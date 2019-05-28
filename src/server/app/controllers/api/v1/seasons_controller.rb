class Api::V1::SeasonsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    respond_to do |format|
      format.html { render }
      format.json { render json: params }
    end
  end

  private 

end
