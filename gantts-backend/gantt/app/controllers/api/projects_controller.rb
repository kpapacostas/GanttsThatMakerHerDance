class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projects, status: 200
  end

end
