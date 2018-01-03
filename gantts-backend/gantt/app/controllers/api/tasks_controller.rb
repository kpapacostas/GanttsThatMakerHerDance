class Api::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @tasks, status: 200
  end

  def create
    @task = Task.create(task_params)
    render json: @task, status: 200
    #
    # if @task.valid?
    #   @task.save
    #   render json: @task, status: 200
    # else
    #   render message: "Ya blew it!"
    # end
  end

  def task_params
    params.require(:task).permit(:title, :content, :start_time, :duration, :track_id)
  end

end
