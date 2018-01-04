class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projects, include: "tracks.tasks", status: 200
  end

  def create
    @project = Project.create(project_params)
    render json: @project, status: 200
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    render json: @project, status: 200
  end

  def delete
    @project = Project.find(params[:id])
    @project.destroy
  end

  def project_params
    params.require(:project).permit(:name)
  end

end
