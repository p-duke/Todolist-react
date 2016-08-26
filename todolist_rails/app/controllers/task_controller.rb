class TaskController < ApplicationController

  def index
    @tasks = Task.all
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task.to_json
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
    params.require(:post).permit(:description)
  end
end
