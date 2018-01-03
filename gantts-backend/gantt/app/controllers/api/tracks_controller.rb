class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render json: @tracks, status: 200
  end

  def create
    @track = Track.create(track_params)
    render json: @track, status: 200
  end

  def update
    @track = Track.find(params[:id])
    @track.update(track_params)
    render json: @track, status: 200
  end

  def delete
    @track = Track.find(params[:id])
    @track.destroy
  end

  def track_params
    params.require(:track).permit(:name, :priority, :project_id)
  end

end
