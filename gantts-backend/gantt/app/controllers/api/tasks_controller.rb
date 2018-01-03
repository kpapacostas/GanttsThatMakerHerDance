class Api::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @task, status: 200
  end

  def create
    @task = Task.new(title: params[:title], content: params[:content], start_time: params[:start_time], duration: params[:duration])

    if @task.valid?
      @task.save
      render json: @task, status: 200
    else
      render message: "Ya blew it!"
    end
  end

end
