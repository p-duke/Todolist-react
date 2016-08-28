class TasksController < ApplicationController

  def index
    render json: @tasks = Task.all
  end

  def new
    @task = Task.new
  end

  def create

    @task = Task.new(task_params)
    @task.status = false
    if @task.save
      render json: @task
    else
      render json: { :errors => @task.errors.full_messages }
    end
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
    @task = Task.find(params[:id])
    @post.destroy

    render json: {success: "true"}
  end

  private
  def task_params
    # puts "\n\n\n\n\n\n\n\n\n I am a teacup"
    params.require(:task).permit(:description)

  end

end
