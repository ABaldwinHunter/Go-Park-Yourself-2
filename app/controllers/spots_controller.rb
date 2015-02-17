class SpotsController < ApplicationController
  def create
    spot = Spot.create(latitude: params['latitude'], longitude: params['longitude'], user: current_user )
    spot_info = {spot: spot, suspended: Tweet.suspended?, regs: spot.regs}
    render json: spot_info.to_json
  end

  def show

  end
end
