import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axiosClient from '../utils/axiosClient';
import { useNavigate } from 'react-router';
import {
  Code2,
  FileText,
  ListChecks,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Rocket,
  AlertCircle,
  Braces
} from 'lucide-react';

// Zod schema matching the problem schema
const problemSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  tags: z.enum(['array', 'linkedList', 'graph', 'dp']),
  visibleTestCases: z.array(
    z.object({
      input: z.string().min(1, 'Input is required'),
      output: z.string().min(1, 'Output is required'),
      explanation: z.string().min(1, 'Explanation is required')
    })
  ).min(1, 'At least one visible test case required'),
  hiddenTestCases: z.array(
    z.object({
      input: z.string().min(1, 'Input is required'),
      output: z.string().min(1, 'Output is required')
    })
  ).min(1, 'At least one hidden test case required'),
  startCode: z.array(
    z.object({
      language: z.enum(['C++', 'Java', 'JavaScript']),
      initialCode: z.string().min(1, 'Initial code is required')
    })
  ).length(3, 'All three languages required'),
  referenceSolution: z.array(
    z.object({
      language: z.enum(['C++', 'Java', 'JavaScript']),
      completeCode: z.string().min(1, 'Complete code is required')
    })
  ).length(3, 'All three languages required')
});

// Small visual helpers — purely presentational, no functional impact
const DIFFICULTY_STYLES = {
  easy: 'badge-success',
  medium: 'badge-warning',
  hard: 'badge-error'
};

const LANGUAGE_META = {
  0: { name: 'C++', dot: 'bg-sky-500' },
  1: { name: 'Java', dot: 'bg-orange-500' },
  2: { name: 'JavaScript', dot: 'bg-yellow-400' }
};

// Tailwind needs full, static class names to detect them at build time —
// mapping avoids constructing class strings dynamically (e.g. `bg-${accent}/10`).
const ACCENT_ICON_STYLES = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent'
};

function SectionCard({ id, icon: Icon, title, subtitle, accent = 'primary', children }) {
  return (
    <section
      id={id}
      className="card bg-base-100 border border-base-200 shadow-sm scroll-mt-24"
    >
      <div className="card-body gap-6">
        <div className="flex items-center gap-3">
          <div
            className={`grid place-items-center w-10 h-10 rounded-xl ${ACCENT_ICON_STYLES[accent]}`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-tight">{title}</h2>
            {subtitle && (
              <p className="text-sm text-base-content/60">{subtitle}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function FieldError({ message }) {
  if (!message) return null;
  return (
    <span className="label-text-alt flex items-center gap-1 text-error mt-1">
      <AlertCircle className="w-3.5 h-3.5" />
      {message}
    </span>
  );
}

function AdminPanel() {
  const navigate = useNavigate();
  const [activeLang, setActiveLang] = useState(0);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(problemSchema),
    defaultValues: {
      startCode: [
        { language: 'C++', initialCode: '' },
        { language: 'Java', initialCode: '' },
        { language: 'JavaScript', initialCode: '' }
      ],
      referenceSolution: [
        { language: 'C++', completeCode: '' },
        { language: 'Java', completeCode: '' },
        { language: 'JavaScript', completeCode: '' }
      ]
    }
  });

  const {
    fields: visibleFields,
    append: appendVisible,
    remove: removeVisible
  } = useFieldArray({
    control,
    name: 'visibleTestCases'
  });

  const {
    fields: hiddenFields,
    append: appendHidden,
    remove: removeHidden
  } = useFieldArray({
    control,
    name: 'hiddenTestCases'
  });

  const currentDifficulty = watch('difficulty');

  const onSubmit = async (data) => {
    try {
      await axiosClient.post('/problem/create', data);
      alert('Problem created successfully!');
      navigate('/');
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-base-200/40">
      {/* Page header */}
      <div className="sticky top-0 z-20 border-b border-base-200 bg-base-100/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary text-primary-content">
              <Braces className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">Create New Problem</h1>
              <p className="text-sm text-base-content/60">
                Fill in every section below to publish a new coding problem.
              </p>
            </div>
          </div>

          {/* Section quick-nav — purely navigational, mirrors form order */}
          <ul className="steps hidden md:flex text-xs">
            <li className="step step-primary">Details</li>
            <li className={`step ${visibleFields.length || hiddenFields.length ? 'step-primary' : ''}`}>
              Test Cases
            </li>
            <li className="step">Code</li>
          </ul>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto px-6 py-8 space-y-6"
      >
        {/* Basic Information */}
        <SectionCard
          id="details"
          icon={FileText}
          title="Basic Information"
          subtitle="The title, prompt, and classification shown to solvers."
          accent="primary"
        >
          <div className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Title</span>
              </label>
              <input
                {...register('title')}
                placeholder="e.g. Merge Two Sorted Linked Lists"
                className={`input input-bordered w-full focus:input-primary ${
                  errors.title ? 'input-error' : ''
                }`}
              />
              <FieldError message={errors.title?.message} />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <textarea
                {...register('description')}
                placeholder="Describe the problem statement, constraints, and examples..."
                className={`textarea textarea-bordered w-full h-36 leading-relaxed focus:textarea-primary ${
                  errors.description ? 'textarea-error' : ''
                }`}
              />
              <FieldError message={errors.description?.message} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Difficulty</span>
                  {currentDifficulty && (
                    <span className={`badge badge-sm ${DIFFICULTY_STYLES[currentDifficulty]}`}>
                      {currentDifficulty}
                    </span>
                  )}
                </label>
                <select
                  {...register('difficulty')}
                  defaultValue=""
                  className={`select select-bordered w-full ${
                    errors.difficulty ? 'select-error' : ''
                  }`}
                >
                  <option value="" disabled>
                    Select difficulty
                  </option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <FieldError message={errors.difficulty?.message} />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Tag</span>
                </label>
                <select
                  {...register('tags')}
                  defaultValue=""
                  className={`select select-bordered w-full ${
                    errors.tags ? 'select-error' : ''
                  }`}
                >
                  <option value="" disabled>
                    Select tag
                  </option>
                  <option value="array">Array</option>
                  <option value="linkedList">Linked List</option>
                  <option value="graph">Graph</option>
                  <option value="dp">Dynamic Programming</option>
                </select>
                <FieldError message={errors.tags?.message} />
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Test Cases */}
        <SectionCard
          id="test-cases"
          icon={ListChecks}
          title="Test Cases"
          subtitle="Visible cases teach the solver; hidden cases grade the submission."
          accent="secondary"
        >
          <div className="space-y-8">
            {/* Visible Test Cases */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-info" />
                  <h3 className="font-semibold text-sm">Visible Test Cases</h3>
                  <span className="badge badge-sm badge-ghost">{visibleFields.length}</span>
                </div>
                <button
                  type="button"
                  onClick={() => appendVisible({ input: '', output: '', explanation: '' })}
                  className="btn btn-sm btn-outline btn-info gap-1"
                >
                  <Plus className="w-4 h-4" /> Add case
                </button>
              </div>

              {errors.visibleTestCases?.root?.message || errors.visibleTestCases?.message ? (
                <FieldError
                  message={errors.visibleTestCases?.root?.message || errors.visibleTestCases?.message}
                />
              ) : null}

              <div className="space-y-3">
                {visibleFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="rounded-xl border border-info/20 bg-info/5 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="badge badge-info badge-outline">Case {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeVisible(index)}
                        className="btn btn-xs btn-ghost text-error gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="form-control">
                        <input
                          {...register(`visibleTestCases.${index}.input`)}
                          placeholder="Input"
                          className={`input input-bordered input-sm w-full font-mono ${
                            errors.visibleTestCases?.[index]?.input ? 'input-error' : ''
                          }`}
                        />
                        <FieldError message={errors.visibleTestCases?.[index]?.input?.message} />
                      </div>
                      <div className="form-control">
                        <input
                          {...register(`visibleTestCases.${index}.output`)}
                          placeholder="Output"
                          className={`input input-bordered input-sm w-full font-mono ${
                            errors.visibleTestCases?.[index]?.output ? 'input-error' : ''
                          }`}
                        />
                        <FieldError message={errors.visibleTestCases?.[index]?.output?.message} />
                      </div>
                    </div>

                    <div className="form-control">
                      <textarea
                        {...register(`visibleTestCases.${index}.explanation`)}
                        placeholder="Explanation shown to the solver"
                        className={`textarea textarea-bordered textarea-sm w-full ${
                          errors.visibleTestCases?.[index]?.explanation ? 'textarea-error' : ''
                        }`}
                      />
                      <FieldError message={errors.visibleTestCases?.[index]?.explanation?.message} />
                    </div>
                  </div>
                ))}

                {visibleFields.length === 0 && (
                  <p className="text-sm text-base-content/50 italic px-1">
                    No visible test cases yet — add at least one.
                  </p>
                )}
              </div>
            </div>

            <div className="divider my-0" />

            {/* Hidden Test Cases */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-warning" />
                  <h3 className="font-semibold text-sm">Hidden Test Cases</h3>
                  <span className="badge badge-sm badge-ghost">{hiddenFields.length}</span>
                </div>
                <button
                  type="button"
                  onClick={() => appendHidden({ input: '', output: '' })}
                  className="btn btn-sm btn-outline btn-warning gap-1"
                >
                  <Plus className="w-4 h-4" /> Add case
                </button>
              </div>

              {errors.hiddenTestCases?.root?.message || errors.hiddenTestCases?.message ? (
                <FieldError
                  message={errors.hiddenTestCases?.root?.message || errors.hiddenTestCases?.message}
                />
              ) : null}

              <div className="space-y-3">
                {hiddenFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="rounded-xl border border-warning/20 bg-warning/5 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="badge badge-warning badge-outline">Case {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeHidden(index)}
                        className="btn btn-xs btn-ghost text-error gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="form-control">
                        <input
                          {...register(`hiddenTestCases.${index}.input`)}
                          placeholder="Input"
                          className={`input input-bordered input-sm w-full font-mono ${
                            errors.hiddenTestCases?.[index]?.input ? 'input-error' : ''
                          }`}
                        />
                        <FieldError message={errors.hiddenTestCases?.[index]?.input?.message} />
                      </div>
                      <div className="form-control">
                        <input
                          {...register(`hiddenTestCases.${index}.output`)}
                          placeholder="Output"
                          className={`input input-bordered input-sm w-full font-mono ${
                            errors.hiddenTestCases?.[index]?.output ? 'input-error' : ''
                          }`}
                        />
                        <FieldError message={errors.hiddenTestCases?.[index]?.output?.message} />
                      </div>
                    </div>
                  </div>
                ))}

                {hiddenFields.length === 0 && (
                  <p className="text-sm text-base-content/50 italic px-1">
                    No hidden test cases yet — add at least one.
                  </p>
                )}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Code Templates */}
        <SectionCard
          id="code"
          icon={Code2}
          title="Code Templates"
          subtitle="Provide starter code and a working reference solution per language."
          accent="accent"
        >
          <div className="space-y-4">
            {/* Language tabs — presentational only, all three languages stay registered */}
            <div role="tablist" className="tabs tabs-boxed w-fit bg-base-200">
              {[0, 1, 2].map((index) => (
                <a
                  key={index}
                  role="tab"
                  onClick={() => setActiveLang(index)}
                  className={`tab gap-2 ${activeLang === index ? 'tab-active' : ''}`}
                >
                  <span className={`w-2 h-2 rounded-full ${LANGUAGE_META[index].dot}`} />
                  {LANGUAGE_META[index].name}
                  {(errors.startCode?.[index] || errors.referenceSolution?.[index]) && (
                    <AlertCircle className="w-3.5 h-3.5 text-error" />
                  )}
                </a>
              ))}
            </div>

            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${
                  activeLang === index ? '' : 'hidden'
                }`}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Initial Code</span>
                    <span className="label-text-alt text-base-content/50">
                      Shown to the solver
                    </span>
                  </label>
                  <textarea
                    {...register(`startCode.${index}.initialCode`)}
                    className={`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${
                      errors.startCode?.[index]?.initialCode ? 'textarea-error' : ''
                    }`}
                    rows={10}
                    spellCheck={false}
                  />
                  <FieldError message={errors.startCode?.[index]?.initialCode?.message} />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Reference Solution</span>
                    <span className="label-text-alt text-base-content/50">Used for grading</span>
                  </label>
                  <textarea
                    {...register(`referenceSolution.${index}.completeCode`)}
                    className={`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${
                      errors.referenceSolution?.[index]?.completeCode ? 'textarea-error' : ''
                    }`}
                    rows={10}
                    spellCheck={false}
                  />
                  <FieldError message={errors.referenceSolution?.[index]?.completeCode?.message} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Submit */}
        <div className="sticky bottom-0 z-10 -mx-6 px-6 py-4 bg-gradient-to-t from-base-200/40 via-base-200/40 to-transparent backdrop-blur-sm">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full gap-2 shadow-md"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              <Rocket className="w-4 h-4" />
            )}
            {isSubmitting ? 'Creating Problem...' : 'Create Problem'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPanel;
