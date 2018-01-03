class Api::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @task, status: 200
  end

end
